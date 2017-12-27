import { BaseEntity } from './../../shared';

export class Transaction implements BaseEntity {
    constructor(
        public id?: string,
        public transactionDate?: any,
        public product?: string,
        public price?: number,
        public paymentType?: string,
        public customerName?: string,
        public city?: string,
        public state?: string,
        public country?: string,
        public accountCreationDate?: any,
        public lastLogin?: any,
        public latitude?: number,
        public longitude?: number,
    ) {
    }
}
