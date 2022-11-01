import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFilterComponent } from './select-filter.component';

import { BirdService } from 'src/app/services/bird.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SelectFilterComponent', () => {
  // X Dado um usuario estando na tela de guia
  // Quando clicar no filtro de cor
  // Então tem que aparecer mais de uma opção pra selecionar

  // x Dado um usuario estando na tela de guia
  // Quando clicar no filtro de cor
  // E selecionar amarelo
  // Então value selecionado é igual ao value em bird reference
  
  // x Dado um usuario estando na tela de guia
  // Quando a requisição de getallbirds for feita
  // Então respnse == 5 and response[0].portugueseName == garça-branca-grande

  // X Dado um usuario estando na tela de guia
  // Quando a pagina estiver visivel
  // então os components do filtro devem ser visiveis

  let component: SelectFilterComponent;
  let fixture: ComponentFixture<SelectFilterComponent>;

  let httpController: HttpTestingController;
  let birdService: BirdService;

  const birds = [
      {
        id: 0,
        image: 'https://cdn.discordapp.com/attachments/1033991589342740510/1033991694951133194/unknown.png',
        englishName: 'great egret',
        latinName: 'ardea alba',
        portugueseName: 'garça-branca-grande',
        dominantColor: 'white',
        gender: '',
        habitat: 'wetlands',
        family: 'ardeidae',
        birdSize: '65',
      },
      {
        id: 1,
        image: 'https://cdn.discordapp.com/attachments/1033991589342740510/1033994905145577522/unknown.png',
        englishName: 'black-necked swan',
        latinName: 'cygnus melancoryphus',
        portugueseName: 'cisne-de-pescoço-preto',
        dominantColor: 'white',
        gender: 'male',
        habitat: '',
        family: 'anatidae',
        birdSize: '80',
      },
      {
        id: 2,
        image: 'https://cdn.discordapp.com/attachments/1033991589342740510/1033998366620794900/unknown.png',
        englishName: 'sienna-and-yellow marshbird',
        latinName: 'pseudoleistes virescens',
        portugueseName: 'dragão',
        dominantColor: 'black',
        gender: 'female',
        habitat: 'campo com árvores',
        family: 'icteridae',
        birdSize: '21',
      },
      {
        id: 3,
        image: 'https://cdn.discordapp.com/attachments/1033991589342740510/1034003036294623232/unknown.png',
        englishName: 'glittering-bellied emerald',
        latinName: 'chlorostilbon lucidus',
        portugueseName: 'besourinho-de-bico-vermelho',
        dominantColor: 'green',
        gender: 'male',
        habitat: 'campo com árvores',
        family: 'trochilidae',
        birdSize: '7',
      },
      {
        id: 4,
        image: 'https://cdn.discordapp.com/attachments/1033991589342740510/1033998366620794900/unknown.png',
        englishName: 'sienna-and-yellow marshbird',
        latinName: 'pseudoleistes virescens',
        portugueseName: 'dragão',
        dominantColor: 'black',
        gender: 'female',
        habitat: 'campo com árvores',
        family: 'icteridae',
        birdSize: '21',
      }
    ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ SelectFilterComponent ],
      providers: [ BirdService ]
    })
    .compileComponents();

    birdService = TestBed.inject(BirdService);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Value selected is not empty', () => {
    const filterColor = fixture.debugElement.nativeElement.querySelector('#dominantColor');
    let selectedIndex: number = 0;
    let selectedColor: string = '';
    let value: string = '';

    component.renderFilterColor(birds);
    fixture.detectChanges();

    selectedIndex = filterColor.options.selectedIndex = 3;
    value = filterColor.options[selectedIndex].outerText
    selectedColor = birds[selectedIndex].dominantColor

    expect(value == selectedColor).toBe(true);
  });


  it('Filter options contain white color', () => {
    const filterColor = fixture.debugElement.nativeElement.querySelector('#dominantColor');

    component.renderFilterColor(birds);
    fixture.detectChanges();

    expect(filterColor.innerHTML).toContain('white');
  });


  it('Filter options is visible', () => {
    const fixture = TestBed.createComponent(SelectFilterComponent);

    const filterColor = fixture.debugElement.nativeElement.querySelector('#dominantColor').innerHTML;
    const filterGender = fixture.debugElement.nativeElement.querySelector('#gender').innerHTML;
    const filterSize = fixture.debugElement.nativeElement.querySelector('#birdSize').innerHTML;
    
    expect(filterColor).toContain('color');
    expect(filterGender).toContain('Gênero');
    expect(filterSize).toContain('Tamanho');
  });


  // Integração 
  it('Server response is equal 5 and response[0] == "garça-branca-grande"', () => {
    birdService.getAllBirds().subscribe(response => {
      expect(response.length).toEqual(5);
      expect(response[0].portugueseName).toEqual('garça-branca-grande');
    });

    const req = httpController.match('http://localhost:8080/birds/all');
    console.log(req)
    expect(req[0].request.method).toBe('GET');
    req[0].flush(birds);
    expect(req[1].request.method).toBe('GET');
    req[1].flush(birds);
  });

  it('Server response is different of null and filterColor have a white option', () => {
    const filterColor = fixture.debugElement.nativeElement.querySelector('#dominantColor');

    birdService.getAllBirds().subscribe(response => {
      expect(response.length).toEqual(5);
    });

    const req = httpController.match('http://localhost:8080/birds/all');
    console.log(req)
    expect(req[0].request.method).toBe('GET'); // request feita pelo guide q tambem conta na pagina
    req[0].flush(birds);
    expect(req[1].request.method).toBe('GET'); // request do component filter
    req[1].flush(birds);

    component.renderFilterColor(birds);
    fixture.detectChanges();

    expect(filterColor.innerHTML).toContain('white');
    console.log(filterColor)
  });
});