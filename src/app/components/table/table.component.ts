import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        id: 1,
        name: 'Hydrogen',
        username: 'afadfsd',
        email: 'some@mail.ru',
        phone: '2452345',
    },
    {
        id: 2,
        name: 'Helium',
        username: 'afadfsd',
        email: 'some@mail.ru',
        phone: '456456',
    },
    {
        id: 3,
        name: 'Lithium',
        username: 'afadfsd',
        email: 'some@mail.ru',
        phone: '453433333',
    },
    {
        id: 4,
        name: 'Beryllium',
        username: 'afadfsd',
        email: 'some@mail.ru',
        phone: '7686786',
    },
    {
        id: 5,
        name: 'Boron',
        username: 'afadfsd',
        email: 'some@mail.ru',
        phone: '34535',
    },
    {
        id: 6,
        name: 'Carbon',
        username: 'afadfsd',
        email: 'some@mail.ru',
        phone: '6675675',
    },
    {
        id: 7,
        name: 'Nitrogen',
        username: 'afadfsd',
        email: 'some@mail.ru',
        phone: '533456',
    },
    {
        id: 8,
        name: 'Oxygen',
        username: 'afadfsd',
        email: 'some@mail.ru',
        phone: '54636453',
    },
    {
        id: 9,
        name: 'Fluorine',
        username: 'afadfsd',
        email: 'some@mail.ru',
        phone: '2243534567777',
    },
    {
        id: 10,
        name: 'Neon',
        username: 'afadfsd',
        email: 'some@mail.ru',
        phone: '90-340989345',
    },
];

@Component({
    selector: 'table-comp',
    templateUrl: './table.template.html',
    styleUrls: ['./table.style.scss'],
})
export class TableComponent implements OnInit {
    dataSource = ELEMENT_DATA;
    displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone'];
    ngOnInit(): void {
        //dispatch action
    }
}
