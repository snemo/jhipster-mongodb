/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { MongodbTestModule } from '../../../test.module';
import { TransactionDetailComponent } from '../../../../../../main/webapp/app/entities/transaction/transaction-detail.component';
import { TransactionService } from '../../../../../../main/webapp/app/entities/transaction/transaction.service';
import { Transaction } from '../../../../../../main/webapp/app/entities/transaction/transaction.model';

describe('Component Tests', () => {

    describe('Transaction Management Detail Component', () => {
        let comp: TransactionDetailComponent;
        let fixture: ComponentFixture<TransactionDetailComponent>;
        let service: TransactionService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [MongodbTestModule],
                declarations: [TransactionDetailComponent],
                providers: [
                    TransactionService
                ]
            })
            .overrideTemplate(TransactionDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TransactionDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TransactionService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Transaction('123')));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith('123');
                expect(comp.transaction).toEqual(jasmine.objectContaining({id: '123'}));
            });
        });
    });

});
