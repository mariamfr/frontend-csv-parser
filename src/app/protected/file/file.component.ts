import { Component } from '@angular/core';
import { FileService } from '../../services/file.service';
//detecta la ruta activa
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})
export class FileComponent {
file: any;
constructor(private fileService: FileService, 
            private activeRoute: ActivatedRoute
 ){}

ngOnInit() :void {
  const fileId: string | null = this.activeRoute.snapshot.paramMap.get('id')
  console.log(fileId)
  if(fileId){
    this.fileService.getFileById(fileId).subscribe(
      response => {
        console.log(response)
        this.file = response.file
        console.log(this.file)
      },
      error => {
        console.log(error)

      }
    )
  }
}

getKeys(obj: any) :string[] {
  console.log(obj)
  if(obj) {
    console.log(Object.keys(obj))
    return Object.keys(obj)
  } else {
    return []
  }
}

}
