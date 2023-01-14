import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  image1="https://cdn.webtekno.com/media/cache/content_detail_v2/article/80441/c-sharp-nedir-c-sharp-programlama-dili-1574612328.jpg";
  image2="https://www.donanimhaber.com/images/images/haber/140161/src/python-en-populer-programlama-dili-oldu140161_12.jpg";
  image3="http://2.bp.blogspot.com/-JFPxyWLO_EI/T7D6cFcmYAI/AAAAAAAAB6A/80iD7QHI4BA/s1600/delphi.jpg";
  image4="https://149611589.v2.pressablecdn.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-19-at-8.43.27-PM.png";
  image5="https://miro.medium.com/max/1400/1*TTM5AleQfFJ-mItttJROdg.jpeg";
  image6="https://www.malwarebytes.com/blog/images/uploads/2022/04/oracle-logo.png";
  image7="https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/d0/4a/27/d04a27c2-cbb0-1321-4d3a-d8df0da32255/AppIcon-0-1x_U007emarketing-0-7-0-0-85-220.png/1200x630wa.png";
  image8="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/01/ea/63/01ea636e-ccf1-e08b-973d-7b9a17d58dc9/AppIcon-0-1x_U007emarketing-0-7-0-sRGB-85-220.png/1200x630wa.png";
  image9="https://www.creativetools.se/image/cache/catalog/product/adobe/animate-cc/Adobe-Animate-2020-Logo-1280x720.jpg";




  constructor(
    public servis: DataService
  ) {

  }

  ngOnInit(): void {

  }

}

