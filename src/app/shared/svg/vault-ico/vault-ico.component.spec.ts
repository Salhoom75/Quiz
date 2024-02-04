import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultIcoComponent } from './vault-ico.component';

describe('VaultIcoComponent', () => {
  let component: VaultIcoComponent;
  let fixture: ComponentFixture<VaultIcoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaultIcoComponent]
    });
    fixture = TestBed.createComponent(VaultIcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
