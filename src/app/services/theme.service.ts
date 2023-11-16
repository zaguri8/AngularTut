import { Injectable } from "@angular/core";


export enum Theme {
    DarkMode = 0, LightMode = 1
}

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    mode: Theme = Theme.DarkMode


    lightMode() {
        this.mode = Theme.LightMode
    }

    darkMode() {
        this.mode = Theme.DarkMode
    }
}