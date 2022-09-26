import { TestBed } from '@angular/core/testing';

import { ServiceWithDependencyService } from './service-with-dependency.service';
describe("service",()=>{
  let service:ServiceWithDependencyService;  
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ServiceWithDependencyService] });
  });
  it("should create an injector",function(){
    service = TestBed.inject(ServiceWithDependencyService)
    expect(service.isItTrue()).toBe(true)
  })
})
/* describe('ServiceWithDependencyService', () => {
  let service: ServiceWithDependencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceWithDependencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 */