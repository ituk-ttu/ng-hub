import {Component, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user.model';
import {Router} from '@angular/router';
import {UserHttpService} from '../../../core/http-services/user.http-service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.sass']
})

export class UsersComponent implements OnInit {

    public users: User[];
    public usersToDisplay: User[];

    constructor(private router: Router, private userService: UserHttpService) {

    }

    ngOnInit() {
        this.userService.getAllUsers(false).subscribe(
            (response) => {
                this.users = response;
                this.usersToDisplay = response;
            },
            () => console.log('i dont know how to handle this error :) We will have some monkeys fix this error soon.'));
    }

    goToUser(userId: number) {
        this.router.navigate([`hub/users/${userId}`]);
    }

    updateUserList(searchString: string) {
        const lowerCaseSearchString: string = searchString.toLowerCase();

        this.usersToDisplay = this.users.filter(user => {
            const name: string = user.firstName + ' ' + user.lastName;

            return name.toLowerCase().includes(lowerCaseSearchString)
                || user.email.toLowerCase().includes(lowerCaseSearchString)
                || (user.studentCode ? user.studentCode.toLowerCase().includes(lowerCaseSearchString) : false)
                || (user.curriculum ? user.curriculum.toLowerCase().includes(lowerCaseSearchString) : false)
                || user.status.statusName.toLowerCase().includes(lowerCaseSearchString)
                || user.role.toLowerCase().includes(lowerCaseSearchString)
                || searchString === '';
        });
    }

    generateExcel() {
        this.downloadFile(this.usersToDisplay, 'liikmete-tabel');
    }

    ConvertToCSV(objArray, headerList) {
        let str = '';
        let row = '';
        // tslint:disable-next-line:forin
        for (const index in headerList) {
            row += headerList[index] + ',';
        }
        row = row.slice(0, -1);
        str += row + '\r\n';
        for (let i = 0; i < objArray.length; i++) {
            let line = (i + 1) + '';
            // tslint:disable-next-line:forin
            for (const index in headerList) {
                const head = headerList[index];
                if (head === 'status') {
                    line += ',' + objArray[i][head].statusName;
                } else {
                    line += ',' + objArray[i][head];
                }
            }
            str += line + '\r\n';
        }
        console.log(str);
        return str;
    }

    downloadFile(data, filename= 'data') {
        const csvData = this.ConvertToCSV(data, ['id', 'firstName', 'lastName', 'email', 'curriculum', 'status', 'role']);
        console.log(csvData);
        const blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
        const dwldLink = document.createElement('a');
        const url = URL.createObjectURL(blob);
        const isSafariBrowser = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
        if (isSafariBrowser) {  // if Safari open in new window to save file with random filename.
            dwldLink.setAttribute('target', '_blank');
        }
        dwldLink.setAttribute('href', url);
        dwldLink.setAttribute('download', filename + '.csv');
        dwldLink.style.visibility = 'hidden';
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    }

    triggerArchived($event) {
        this.userService.getAllUsers($event.target.checked).subscribe(
            (response) => {
                this.users = response;
                this.usersToDisplay = response;
            },
            () => console.log('i dont know how to handle this error :) We will have some monkeys fix this error soon.'));

    }
}
