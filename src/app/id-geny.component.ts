import { Component } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var GIXI: any;

@Component({
  moduleId: module.id,
  selector: 'id-geny-app',
  templateUrl: 'id-geny.component.html',
  styleUrls: ['id-geny.component.css']
})
export class IdGenyAppComponent implements AfterViewInit {
  @ViewChild("gixie") gixie: ElementRef;
  title = 'id-geny!';
  imageData: any;
  context: CanvasRenderingContext2D;
  constructor() {

  }

  ngAfterViewInit() {
    let canvas = this.gixie.nativeElement;
    let context = canvas.getContext('2d');
    let source = new Image();
    this.imageData = new GIXI(300).getImage();
    source.setAttribute('src', this.imageData);
    //     let imageSize =300;
    //     this.imageData = new GIXI(300).getImage();
    //     console.log('imageData', this.imageData);
    // let canvas = this.myCanvas.nativeElement;
    //     this.context = canvas.getContext("2d");
    //     // let canvas: any = this.cropcanvas.nativeElement;
    //     // happy drawing from here on
    //     // context.fillStyle = 'blue';
    //     // context.fillRect(10, 10, 150, 150);
    //     this.gixie.nativeElement.setAttribute('src', this.imageData);
    //     // canvas


    //     this.context. .setAttribute('src', this.imageData)
  }

}
