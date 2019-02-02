import {Component, OnInit} from '@angular/core';
import {ResourcesHttpService} from "../../services/resources.http-service";
import {ResourcesContentModel} from "../../models/resources-content.model";

@Component({
    selector: 'app-hub',
    templateUrl: './hub.component.html',
    styleUrls: ['./hub.component.css']
})

export class HubComponent implements OnInit {
    public resources: ResourcesContentModel[];

    constructor(private usehttps: ResourcesHttpService) {
        usehttps.getResources().subscribe(
            (response) => this.resources = response,
            () => console.log('Error getting content'))
    }

    ngOnInit() { }
}
