import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
val:any=1;	
current_selected:any={};

user_heroes=[

  { id: 11, name: 'Dr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
	
];

ngOnInit()
{
	
}
	dashbaord(v){
		this.val=v;	 
	}

	select(s,u_id,u_name){
		this.val=s;
		this.current_selected={id: u_id,name: u_name};
		
	}

	update_data(){
		this.user_heroes=this.user_heroes.map(h=>{
			if(h.id===this.current_selected.id){
				return this.current_selected;
			}
			return h;
		})
		this.val=1;
	}

}
