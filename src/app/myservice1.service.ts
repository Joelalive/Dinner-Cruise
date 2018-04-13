import{Injectable}from '@angular/core';
@Injectable()

export class  Myservice1Service
{   
    run()
    {
        return "Running";
    }

    json:any;
    
    myJson()
    {
    return  this.json=[
              {name:"Joel",age:25,mobile:7687},
              {name:"sarath",age:24, mobile:78689},
              {name:"guhan",age:27,mobile:878979}
     ];
    }

}