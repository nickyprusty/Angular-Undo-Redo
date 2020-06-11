import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryHttpService {
  galleryApi = `${environment.productApi}/gallery`;

  constructor(private http: HttpClient) {}

  getGalleryImages(): Observable<any> {
    return this.http.get<any>(this.galleryApi);
  }
}
