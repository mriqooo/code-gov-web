///<reference path="../../../../node_modules/@types/jasmine/index.d.ts"/>
import { HttpModule } from '@angular/http';
import { async, TestBed } from '@angular/core/testing';
import { StatusService } from './status.service';

describe('StatusService', () => {
  let service: StatusService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        StatusService,
      ]
    });
  }));

  it('should use StatusService', () => {
    service = TestBed.get(StatusService);
    service.getJsonFile().map(value => expect(value.json()).toBeDefined());
  });

  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
      service = TestBed.get(StatusService);
      let value = service.getJsonFile();
      expect(value).toBe('observable value');
      done();
    });

  it('#getData',
    () => {
      service = TestBed.get(StatusService);
      service.getJsonFile().subscribe(value => {
        expect(value).toEqual({'timestamp': '123123312', 'statuses': {}});
      });
    });
})
;
