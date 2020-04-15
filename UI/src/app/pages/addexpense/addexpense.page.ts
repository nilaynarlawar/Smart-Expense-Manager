import { Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {ActionSheetController, NavController} from '@ionic/angular';
import {Camera, PictureSourceType} from '@ionic-native/camera/ngx';
import {Tesseract} from 'tesseract.ts';
import {FormControl} from '@angular/forms';
import {} from 'googlemaps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {StorageService} from '../../services/storage.service';
import {AuthConstants} from '../../config/auth-constants';
@Component({
    selector: 'app-addexpense',
    templateUrl: './addexpense.page.html',
    styleUrls: ['./addexpense.page.scss'],
})
export class AddexpensePage implements OnInit {
    selectedImage: string;
    imageText: string;
    expenseId = 0;
    isEdit = false;
    lat: number;
    lng: number;
    searchCtrl: FormControl;
    zoom = 8;
    location: any;
    selectedFile: null;
    hashmap  = new Map<string, string>();

    public postData = {
        itemName: '',
        itemDescription: '',
        amount: '',
        transactionDate: '',
        location: '',
        userId: 0,
        expenseId: '',
        expenseCategory: ''
    };
    constructor(private router: Router,
                private route: ActivatedRoute,
                private authService: AuthService,
                private toastService: ToastService,
                private storageService: StorageService,
                public actionSheetController: ActionSheetController,
                private camera: Camera,
                private geolocation: Geolocation,
                private navCtl: NavController) {

      this.route.queryParams.subscribe(params => {
          if (params && params.id) {
              this.expenseId = params.id;
          } else {
              this.expenseId = 0;
              this.postData = { itemName: '',
                  itemDescription: '',
                  amount: '',
                  transactionDate: '',
                  location: '',
                  userId: 0,
                  expenseId: '',
                  expenseCategory: ''};
          }
      });

    }

    ionViewWillEnter() {
        this.getUserId();
    }

    ngOnInit() {
            }

    prepareExpenseData() {
        if (this.expenseId && this.expenseId !== 0 ) {
            this.isEdit = true;
            this.authService.getExpense(this.expenseId).subscribe((response: any) => {
                if (response) {
                    this.postData.amount = response.amount;
                    this.postData.expenseId = response.expenseId;
                    this.postData.itemName = response.itemName;
                    this.postData.itemDescription = response.itemDescription;
                    this.postData.transactionDate = response.transactionDate;
                    this.postData.location = response.location;
                    this.postData.expenseCategory = response.expenseCategory;
                    const latLng = this.postData.location.split(':');
                    this.lat = parseFloat(latLng[0]);
                    this.lng = parseFloat(latLng[1]);
                    console.log(this.lat);
                    console.log(this.lng);
                }
            });
        } else {
            this.isEdit = false;
        }
    }

    validateInputs() {
        const itemname = this.postData.itemName.trim();
        const itemdescription = this.postData.itemDescription.trim();
        const amount = this.postData.amount.trim();
        const transactionDate = this.postData.transactionDate.trim();
        return (this.postData.itemName && this.postData.itemDescription
            && itemdescription.length > 0 && itemname.length > 0 && amount.length > 0 &&
            transactionDate.length > 0);
    }

    reco() {
        Tesseract.recognize(this.selectedFile).then(result => {
                this.imageText = result.text;
                console.log(this.imageText);
                this.fillTextBox(this.imageText);
        });
    }

    fillTextBox(s) {
       const lines: string[] = s.split('\n');
       for (const s1 of lines) {
                if ( s1.includes(':')) {
                    const split = s1.split(':', 2);
                    this.hashmap.set(split[0], split[1]);
                }
        }
       this.postData.itemName = this.hashmap.get('Item Name');
       this.postData.itemDescription = this.hashmap.get('Item Description');
       this.postData.amount = this.hashmap.get('Amount');
}
    async selectSource1() {
        const actionsheet1 = await this.actionSheetController.create({
            header: '',
            buttons: [
                {
                    text: 'Use Library',
                    handler: () => {
                        this.camera.getPicture({
                            quality: 100, destinationType: this.camera.DestinationType.DATA_URL,
                            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                            allowEdit: true,
                            saveToPhotoAlbum: false,
                            correctOrientation: true
                        }).then(imageData => {
                            this.selectedImage = 'data:image/jpeg;base64' + {imageData};
                        });
                        // this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Capture Image',
                    handler: () => {
                        this.camera.getPicture({
                            quality: 100, destinationType: this.camera.DestinationType.DATA_URL,
                            sourceType: this.camera.PictureSourceType.CAMERA,
                            allowEdit: true,
                            saveToPhotoAlbum: false,
                            correctOrientation: true
                        }).then(imageData => {
                            this.selectedImage = 'data:image/jpeg;base64' + {imageData};
                        });
                        // this.getPicture(this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        await  actionsheet1.present();
    }

    addExpense() {
        if (this.validateInputs()) {
            this.authService.addExpense(this.postData).subscribe((response) => {
                this.navCtl.navigateRoot('/home/viewexpense');
               // this.router.navigateByUrl('/home/viewexpense');
            });
        } else {
            this.toastService.presentToast('Please provide valid inputs');
        }
    }

    editExpense() {
        if (this.validateInputs()) {
            this.authService.editExpense(this.postData).subscribe((response) => {
                    this.navCtl.navigateRoot('/home/viewexpense');
            });
        } else {
            this.toastService.presentToast('Please provide some information about expense');
        }
    }

    placeMarker($event) {
        this.lat = $event.coords.lat;
        this.lng = $event.coords.lng;
        this.postData.location = this.lat + ':' + this.lng;
    }
    onLocate() {
        this.geolocation.getCurrentPosition()
            .then(
                (location) => {
                    this.location = location;
                    this.lat = location.coords.latitude;
                    this.lng = location.coords.longitude;
                    this.postData.location = this.lat + ':' + this.lng;
                    console.log('Location fetch successfully');
                }
            )
            .catch(
                (error) => console.log('An Error Occured'));
    }

     getUserId() {
         this.storageService.get(AuthConstants.USERID).then(res => {
            if (res) {
                this.postData.userId = parseInt(res, 10);
                this.prepareExpenseData();
            }
        });
    }

    onFileSelect(event) {
        this.selectedFile = event.target.files[0];
        this.reco();
    }
}
