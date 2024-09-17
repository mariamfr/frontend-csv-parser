import { Component } from '@angular/core';
import { FileService } from '../../services/file.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './files.component.html',
  styleUrl: './files.component.css'
})
export class FilesComponent {

  files: any[] = []

  constructor(private fileService : FileService, private router : Router) {}

  ngOnInit(): void {
    this.loadFiles()
  }

  loadFiles(): void {
    this.fileService.getAllFiles().subscribe(
      response => {
//        console.log(response)
        this.files = response.files
        console.log(this.files)
      },
      error => {
        console.log(error)
      }
    )
  }

 
 deleteFileById(fileId: string) : void {
  Swal.fire({
    title: 'Do you want delete this file',
    // showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Yes'
  }).then((result) => {
    if(result.isConfirmed) {
      this.fileService.deleteFileById(fileId).subscribe(
        response => {
            console.log(response)
            Swal.fire('deleted', response.msg , 'success' )
            this.files = this.files.filter( x => x._id !== fileId)
        },
        error => {
            console.log(error)
        }
      )
    
    }
  });
 }

 viewFile(fileId: String): void {
  //a la ventana que quiero ir y con que valores
  this.router.navigate(['/file', fileId])
}



}
