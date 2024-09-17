import { Component } from '@angular/core';
import { FileService } from '../../services/file.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-csv-home',
  standalone: true,
  imports: [],
  templateUrl: './csv-home.component.html',
  styleUrl: './csv-home.component.css'
})

export class CsvHomeComponent {
file: File | null = null
constructor( private fileService: FileService) {}

onFileSelected(event: any){
  //contenido del archivoe
  //console.log(event)
  this.file = event.target.files[0]
  console.log(this.file)
}

onUpLoad() : void {
  if(this.file) {
      console.log(this.file)
      this.fileService.uploadFile(this.file).subscribe(
        response => {
            console.log("Response es:", response)
            Swal.fire('Success', response.msg, 'success') 
        },
        error => {
            console.log("error es:", error)
            Swal.fire('Upss', error.error.msg, 'error')
        }
      )
  } else {
    Swal.fire('Upss', 'File is mandatory', 'error')
  }
}

}
