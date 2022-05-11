import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
})
export class CdkDragDropConnectedSortingExample {
    onDrag:boolean=false;
    count:any[]=[];
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];


  constructor(){
  }

  drop(event: CdkDragDrop<string[]>,index:number) {
    const id=event.container.element.nativeElement.getAttribute('id')
    console.log(id,event.isPointerOverContainer
)
    if (id && id.startsWith('todo'))
    {
      if (!this.count[index])
         this.count[index]=[]
      this.count[index].push(event.previousContainer.data[event.previousIndex])
    }
    }
        
  click(data:any[])
  {
    console.log(data)
  }

}