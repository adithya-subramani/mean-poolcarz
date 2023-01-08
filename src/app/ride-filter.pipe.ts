import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rideFilter'
})
export class RideFilterPipe implements PipeTransform {

  transform(value: any[],option:string): any[] {
    if(option==="fromOff") return value.filter(x=>x.strt=="Office");
    if(option==="toOff") return value.filter(x=>x.stop=="Office");
    if(option==="oth") return value.filter(x=>x.stop!="Office" && x.strt!="Office");
    return value;
  }

}
