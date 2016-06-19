import { Component } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef, Renderer } from '@angular/core';

declare var GIXI: any;

@Component({
  moduleId: module.id,
  selector: 'id-geny-app',
  templateUrl: 'id-geny.component.html',
  styleUrls: ['id-geny.component.css']
})
export class IdGenyAppComponent implements AfterViewInit {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  title = 'id-geny!';
  imageData: any;
  context: CanvasRenderingContext2D;
  imageSource: any;
  imgSource:  Array<any> = [];

  constructor(public renderer: Renderer) {

  }

  ngAfterViewInit() {

    // let canvas = this.myCanvas.nativeElement;
    // this.context = canvas.getContext("2d");
    // let context = canvas.getContext('2d');
    // let source = new Image();

    // this.imageData = new GIXI(50).getImage();
    this.imageSource = this.imageData;
    console.log('imageData', this.imageData);
    let xx: Array<any> = [];
    for (var x = 0; x < 25; x++) {
      let imgData = new GIXI(50).getImage();
      this.imgSource.push(imgData);
    }
    console.log(xx);
    // source.setAttribute('src', this.imageData);
    //     let imageSize =300;
    //     this.imageData = new GIXI(300).getImage();
    //     console.log('imageData', this.imageData);
    // let canvas = this.myCanvas.nativeElement;
    //     this.context = canvas.getContext("2d");
    //  let el: any = this.myCanvas.nativeElement;
    //      var ctx = this.context;
    // ctx.clearRect(0, 0, 400, 400);
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(0, 0, 100, 100);

    //  el.setAttribute('src', this.imageData);
    //     // happy drawing from here on
    //     // context.fillStyle = 'blue';
    //     // context.fillRect(10, 10, 150, 150);
    //  this.gixie.nativeElement.setAttribute('src', this.imageData);
    //     // canvas


    //     this.context. .setAttribute('src', this.imageData)
    // this.renderer.setElementAttribute(this.gixie, 'src', this.imageData);
  }

}
