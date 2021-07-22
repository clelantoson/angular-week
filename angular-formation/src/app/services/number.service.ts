import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

//on indique a Angular que ntre service est injectable dans toute l'app
@Injectable({
	providedIn:'root'
})
export class NumberService {
	compteur = 0;
	// permet de notifier tous
	onCompteurUpdate = new Subject<number>();

	incrementer(){
		this.compteur++;
		// on notifie les abonnes avec la methode next et on leur donnne la nouvelle valeur
		this.onCompteurUpdate.next(this.compteur);
	}
}

// service = new NumberService();
// com = new JServiceComponent()
