import { Component } from '@angular/core';

interface Product
{
  img:string;
  title:string;
  description:string;
  price:number;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent 
{
  allProduct:Product[] = [
    {img:"assets/images/2.jpg",title:"Brand Name: ASUS",description:"ASUS ROG Strix Scar 15 G533QS-HF017T R9-5900HX 32GB 1TB SSD RTX3080 8GB 15.6 FHD 300Hz Win11 2Y Perfect Warranty",price:99999},    
    {img:"assets/images/2.jpg",title:"Brand Name: ASUS",description:"ASUS ROG Strix Scar 15 G533QS-HF017T R9-5900HX 32GB 1TB SSD RTX3080 8GB 15.6 FHD 300Hz Win11 2Y Perfect Warranty",price:99999},    
    {img:"assets/images/2.jpg",title:"Brand Name: ASUS",description:"ASUS ROG Strix Scar 15 G533QS-HF017T R9-5900HX 32GB 1TB SSD RTX3080 8GB 15.6 FHD 300Hz Win11 2Y Perfect Warranty",price:99999},    
    {img:"assets/images/2.jpg",title:"Brand Name: ASUS",description:"ASUS ROG Strix Scar 15 G533QS-HF017T R9-5900HX 32GB 1TB SSD RTX3080 8GB 15.6 FHD 300Hz Win11 2Y Perfect Warranty",price:99999},
    
    {img:"assets/images/3.jpg",title:"Brand Name: Samsung",description:"Samsung 55 Inch TV Neutral Quantum Processor Lite 8K QLED - Stainless Steel - QA55QN700CUXEG [2023 Model]",price:59999},    
    {img:"assets/images/3.jpg",title:"Brand Name: Samsung",description:"Samsung 55 Inch TV Neutral Quantum Processor Lite 8K QLED - Stainless Steel - QA55QN700CUXEG [2023 Model]",price:59999},    
    {img:"assets/images/3.jpg",title:"Brand Name: Samsung",description:"Samsung 55 Inch TV Neutral Quantum Processor Lite 8K QLED - Stainless Steel - QA55QN700CUXEG [2023 Model]",price:59999},    
    {img:"assets/images/3.jpg",title:"Brand Name: Samsung",description:"Samsung 55 Inch TV Neutral Quantum Processor Lite 8K QLED - Stainless Steel - QA55QN700CUXEG [2023 Model]",price:59999},   
    
    {img:"assets/images/4.jpg",title:"Brand Name: Huawei",description:"HUAWEI NOVA 11iDual SIM, 8GB RAM + 128GB ROM - Mint Green + Huawei band 4 (gift)",price:14102},    
    {img:"assets/images/4.jpg",title:"Brand Name: Huawei",description:"HUAWEI NOVA 11iDual SIM, 8GB RAM + 128GB ROM - Mint Green + Huawei band 4 (gift)",price:14102},    
    {img:"assets/images/4.jpg",title:"Brand Name: Huawei",description:"HUAWEI NOVA 11iDual SIM, 8GB RAM + 128GB ROM - Mint Green + Huawei band 4 (gift)",price:14102},    
    {img:"assets/images/4.jpg",title:"Brand Name: Huawei",description:"HUAWEI NOVA 11iDual SIM, 8GB RAM + 128GB ROM - Mint Green + Huawei band 4 (gift)",price:14102},  
    
    {img:"assets/images/5.jpg",title:"Brand Name: Year",description:"P9 Wireless Bluetooth Headset, Pure Stereo Sound and Memory Card Support(Blue)",price:1230},    
    {img:"assets/images/5.jpg",title:"Brand Name: Year",description:"P9 Wireless Bluetooth Headset, Pure Stereo Sound and Memory Card Support(Blue)",price:1230},    
    {img:"assets/images/5.jpg",title:"Brand Name: Year",description:"P9 Wireless Bluetooth Headset, Pure Stereo Sound and Memory Card Support(Blue)",price:1230},    
    {img:"assets/images/5.jpg",title:"Brand Name: Year",description:"P9 Wireless Bluetooth Headset, Pure Stereo Sound and Memory Card Support(Blue)",price:1230},   
    
    {img:"assets/images/6.jpg",title:"Brand Name: JBL",description:"JBL Tune 230NCTWS True Wireless Noise Cancelling Earbuds, Pure Bass Sound, ANC + Smart Ambient, 4 Microphones, 40H of Battery, Water Resistant, Sweatproof, Comfortable Fit - Sand, JBLT230NCTWSSAN",price:4977},    
    {img:"assets/images/6.jpg",title:"Brand Name: JBL",description:"JBL Tune 230NCTWS True Wireless Noise Cancelling Earbuds, Pure Bass Sound, ANC + Smart Ambient, 4 Microphones, 40H of Battery, Water Resistant, Sweatproof, Comfortable Fit - Sand, JBLT230NCTWSSAN",price:4977},    
    {img:"assets/images/6.jpg",title:"Brand Name: JBL",description:"JBL Tune 230NCTWS True Wireless Noise Cancelling Earbuds, Pure Bass Sound, ANC + Smart Ambient, 4 Microphones, 40H of Battery, Water Resistant, Sweatproof, Comfortable Fit - Sand, JBLT230NCTWSSAN",price:4977},    
    {img:"assets/images/6.jpg",title:"Brand Name: JBL",description:"JBL Tune 230NCTWS True Wireless Noise Cancelling Earbuds, Pure Bass Sound, ANC + Smart Ambient, 4 Microphones, 40H of Battery, Water Resistant, Sweatproof, Comfortable Fit - Sand, JBLT230NCTWSSAN",price:4977},    
  ]
}
