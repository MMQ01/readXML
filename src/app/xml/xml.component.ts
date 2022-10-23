import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xml',
  templateUrl: './xml.component.html',
  styleUrls: ['./xml.component.css']
})
export class XmlComponent {
  contenido: any
  fileChooser = document.getElementById('fileChooser');

  parseTextAsXml(text: any) {
    var parser = new DOMParser(),
      xmlDom = parser.parseFromString(text, "text/xml");
      this.contenido=xmlDom
      console.log(this.contenido);
      
    //ahora, extraer los elementos del xmlDom y asignarlos a los imputs
  }

  waitForTextReadComplete($event: any) {
    const [file] = $event.target.files
    let reader = new FileReader()
    reader.onloadend = (e)=> {
      var txt = reader.result
      this.parseTextAsXml(txt)  
    }
    reader.readAsText(file);
   
  }


  handleFileSelection($event: any) {
   
;
   
  }

  // fileChooser.addEventListener('change', handleFileSelection, false);


}
