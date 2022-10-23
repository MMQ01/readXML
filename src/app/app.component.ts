import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leerArchivo';
  public fileTmp:any
  file:any;
  contenido:any

  getFile($event: any){
    const [file]=$event.target.files
    this.fileTmp=file  
    this.leerArchivo(this.fileTmp)
    }

    leerArchivo(file:any){
      if(file){
        let reader= new FileReader()

        reader.onload = (e)=> {
          this.contenido=reader.result;
          if(this.contenido){
            let eventosXML = this.contenido.getElementsByTagName('Placemark');
            let start=this.contenido.indexOf('<Placemark>')
            let end=this.contenido.indexOf(' </Placemark>')

            
            // this.contenido=this.contenido.slice(start,end)



            let startname=this.contenido.indexOf('<name>')
            let endname=this.contenido.indexOf('</name>')
            console.log(start , end);
            

            let name=this.contenido.slice(startname,endname)
            console.log(this.contenido);
            console.log(name, ' nombre');
            
            
          }
       }
        reader.readAsText(file)
        
      }else{
        console.log('No se ha seleccionado archivo');
        
      }
      
    }

    

    
  }
 

