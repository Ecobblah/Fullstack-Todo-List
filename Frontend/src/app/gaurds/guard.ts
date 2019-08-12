import { CanActivate } from "@angular/router";

export class MyGuard implements CanActivate {
    canActivate() {
        return true;
    }
}
