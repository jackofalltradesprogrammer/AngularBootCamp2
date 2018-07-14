export interface IEmployee {
    id:number;
    ename:string;
    job:string;
    salary:number;
}

export class Employee implements IEmployee{
    id:number;
    ename:string;
    job:string;
    salary:number;
  
    constructor(id?:number, ename?:string, job?:string, salary?:number) {
      this.id=id;
      this.ename=ename;
      this.job=job;
      this.salary=salary;
    }
  }