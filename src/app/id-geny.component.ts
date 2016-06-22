import { Component } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton} from '@angular2-material/radio';
import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
import {MdSpinner} from '@angular2-material/progress-circle';
import {MdProgressBar} from '@angular2-material/progress-bar';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list/grid-list';


declare let GIXI: any;

interface ITile {
  id?: string;
  isRevealed?: boolean;
  isMatched?: boolean;
  pattern?: any;
  xPos?: any;
  yPos?: any;
}

@Component({
  moduleId: module.id,
  selector: 'id-geny-app',
  templateUrl: 'id-geny.component.html',
  styleUrls: ['id-geny.component.css'],
  providers: [MdRadioDispatcher, MdIconRegistry],
  directives: [MD_SIDENAV_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdCheckbox,
    MdRadioButton,
    MdSpinner,
    MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdProgressBar,
    MdIcon,
    MD_GRID_LIST_DIRECTIVES]
})

export class IdGenyAppComponent implements AfterViewInit {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  tileObject: ITile;
  cover: any = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAdVBMVEX///9CPj/k4+MhHR4gHB0iHh/g394+Ojn6+vr8/Pz19fWamJjb2tqNi4skISKFg4Olo6OzsrLp6eldWluhoKBST0+TkZHW1dVKR0dyb2/NzMx8enoqJyhjYWI6NjesqqoxLi9OS0vFxMRraGhgXVx4dne4t7fPcN26AAADHklEQVRIiZWW27ajIAyGwYDjCRQVK63Wdti77/+IE6wHsO1anVy1wmfin5BACIlKTb80LWqCdm7Mo4i+skKZnxP6aLqMfG2ZGCNS/r4l0iRJ3zK2I/pxfJoUU3kx42gu5VQkx1WlCS3CR1E+XiVbTF5tHoXrBSU0eBQJyhkw4FxKzvEH470IdsR/AiSZekC7NaKalJoq0dzc//uUfEKiywAgdX7eBMnO+V1yGC71e6RogEPf7quz1S3FMH/id0ihgcvfmLxYYdBRE78iEfoY8j2kbE9X1g0cxvqIJBck2nQNxuh7Y/L1zWmLzCU5INPAZb4QD80ZysuAVotUaSf5oEIkRnXXynlcGcekcCeVWJjMoNZRgAiAfgnjRBluRpVQDT5MqwYUoPORiIJsl8ULErLJq8pirNCvguYSaOwhOQe9KBJRjMnUs1AuvNVNjTmodiQZGc+XpcfA+e383NWDfEbzjJ3ZZEOKKyy7CGnxI/RTiAxfzMoVOd/gWmzIJFmzZq7Dmm+S1aHnJWuYVBtSMhDrirLWdi5B6YOiZFKtC6gLbzcE/1TrQurMfUh5A4ne9yoVzEX5RFLDNmG2yLXLJaPn/VHFmUlXZGSe/zVwVwHaI4iSbEw+I38Hl3oRnB0fIa+BTehCdmFb8gMLPn9BMO/Xw3HzPz8QeUOgPxzpQGQ/lR+RMJWxVzAbwg5IWDCJZZAH60VVVSpsrliWZi9LrEW4HyI/WnQPip9E/X7EZvtrjCmDz+v487htB7kDTk/ehgrrmfp+T9gA59g3BN2C8d5aoWI+klkAHbaLuSl52T54ScVrU8LWx/fWh4qWZbm3ziTH010eWx+pR2yX78dmJrBZ2pcGi7+xKUtbvBIni33tZ9vmD4sY/QDND/mJOjcs7L4rGEl1iSOJ34U/kkSP2g3lh5GEn6k0nwffr6iUqsRvc2P4Ev34OPhcGHnvxitjbrwy1/9lH85khxyH+GSu8+6Zu5rpMMRPlOjDqXdXBdWWZrRGtCp+uSpMmgjz/gqTvr2PzBeSehT/de1xKT2NVn19ubLPXEfd91e4Dn38Axo5MsJaP50jAAAAAElFTkSuQmCC`;
  title = 'id-geny!';
  imageData: any;

  imageSource: any;
  imgSource: Array<any> = [];

  firstItem: ITile = {};
  secondItem: ITile = {};
  firstItemSelected: boolean = false;
  secondItemSelected: boolean = false;

  tiles: any[] = [
    { text: 'One', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
  ];

  constructor() {

  }

  generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  };

  get icons(): number[][] {
    return this.createIcons();
  }

  checkForMatch(item1: any, item2: any): boolean {
    if (item1.id === item2.id) {
      return true;
    } else {
      return false;
    }
  }

  iconSelected(event: any) {
    console.log(event);
    if (this.firstItemSelected) {
      this.secondItem = event;
      this.secondItemSelected = true;
      console.log('secondItem', this.secondItem);
      this.firstItemSelected = false;
      console.log('match!!!', this.checkForMatch(this.firstItem, this.secondItem));
      return;
    }
    this.firstItem = event;
    this.firstItemSelected = true;
     console.log('firstItem', this.firstItem);

  };

  // shuffleTile(o) {
  //   for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  //   return o;
  // };

  createIcons() {
    this.imgSource = [];
    for (var x = 0; x < 12; x++) {
      let imgData = new GIXI(50).getImage();
      let tmpObj: ITile = {
        id: this.generateUUID(),
        pattern: imgData,
        isMatched: false,
        isRevealed: (Math.random() < 0.5),
        xPos: x % 5,
        yPos: Math.floor(x / 5)
      };
      this.imgSource.push(tmpObj);
      this.imgSource.push(tmpObj);
      // this.imgSource.push(new GIXI(50).getImage(););
    }
    let tmpObjX: ITile = {
      id: this.generateUUID(),
      pattern: new GIXI(50).getImage(),
      isMatched: false,
      isRevealed: (Math.random() < 0.5),
      xPos: x % 5,
      yPos: Math.floor(x / 5)
    };
    this.imgSource.push(
      tmpObjX
    );

    // for (var x1 = 0; x1 < 25; x1++) {
    //   this.imgSource[x1].xPos = x1 % 5;
    //   this.imgSource[x1].yPos = Math.floor(x1 / 5);
    // }
    console.log(this.imgSource);
    return this.imgSource;
  }

  ngAfterViewInit() {
    this.createIcons();

  }

}
