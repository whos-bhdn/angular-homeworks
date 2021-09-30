import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework12',
  templateUrl: './homework12.component.html',
  styleUrls: ['./homework12.component.css']
})
export class Homework12Component implements OnInit {
  arrWords: Array<string> = [];
  newWord!: string;
  auditWord!: string;
  arrAuditWords: Array<string> = [];


  constructor() {
  }

  ngOnInit(): void {
  }


  addWord(): void {
    if (this.newWord) {
      this.arrWords.push(this.newWord);
      this.newWord = '';
      console.log(this.arrWords);
    }
  }

  resetValue(): void {
    this.arrWords = [];
  }

  audit(): void {
    this.arrAuditWords.push(this.auditWord);
    console.log(this.arrAuditWords);
    if (this.arrAuditWords.length > 0) {
      let filterArray: Array<string> = this.arrAuditWords.filter(e => e.includes(this.newWord))
      console.log(filterArray);
      this.arrAuditWords = [];

      // filterArray.forEach(el => {
  //       if(el === this.newWord && ''){
  //         this.auditWord = this.auditWord.replace(el, '*')
  //       }
  //     })
  //   }
  //
  // };
}
  }



}
