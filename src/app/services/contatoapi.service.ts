import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoapiService {

  constructor(private http: HttpClient) { }

  postContato(nome: string, email:string, telefone:string, nascimento:string) {
    let url = 'https://localhost:44380/api/Contato2';

    let data =
      {
        "nome": nome,
        "email": email,
        "telefone": telefone,
        "nascimento": nascimento
      };

    return this.http.post(url,data).toPromise();
  }

  getContatos() {
    let url = 'https://localhost:44380/api/Contato2';
    return this.http.get(url).toPromise();
  }

  getContato(id) {
    let url = 'https://localhost:44380/api/Contato2/' + id;
    return this.http.get(url).toPromise();
  }
}
