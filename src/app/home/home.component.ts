import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { UserService } from "../services/user.service";
import { Theme, ThemeService } from "../services/theme.service";


@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, RouterOutlet],
    standalone: true
})
export class HomeComponent implements OnInit {
    title = "Home"

    public themeService = inject(ThemeService) // 1 way to inject (field injection)
    constructor(public userService: UserService) { } // 2nd way to inject (constructor inecjtion)

    ngOnInit(): void { }


    changeMode() {
        if (this.themeService.mode == Theme.DarkMode) {
            this.themeService.lightMode()
        } else {
            this.themeService.darkMode()
        }
    }
}

