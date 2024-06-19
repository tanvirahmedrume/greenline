const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");
const d4 = document.getElementById("d4");
const e1 = document.getElementById("e1");
const e2 = document.getElementById("e2");
const e3 = document.getElementById("e3");
const e4 = document.getElementById("e4");
const f1 = document.getElementById("f1");
const f2 = document.getElementById("f2");
const f3 = document.getElementById("f3");
const f4 = document.getElementById("f4");
const g1 = document.getElementById("g1");
const g2 = document.getElementById("g2");
const g3 = document.getElementById("g3");
const g4 = document.getElementById("g4");
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");
const h4 = document.getElementById("h4");
const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const i3 = document.getElementById("i3");
const i4 = document.getElementById("i4");
const j1 = document.getElementById("j1");
const j2 = document.getElementById("j2");
const j3 = document.getElementById("j3");
const j4 = document.getElementById("j4");

let bookedTickets = 0;

function ticketSeletedA() {
  a1.addEventListener('click', ()=>{
    if (a1.classList.contains('booked')) {
      a1.style.color = '';
      a1.style.background = '';
      a1.classList.remove('booked');
      bookedTickets--;
    } else {
      a1.style.background = '#1DD100';
      a1.style.color = 'white';
      a1.classList.add('booked');
      bookedTickets++;
    }
    ticketCount();
  })

  a2.addEventListener('click', ()=>{
    if (a2.classList.contains('booked')) {
      a2.style.color = '';
      a2.style.background = '';
      a2.classList.remove('booked');
      bookedTickets--;
    } else {
      a2.style.background = '#1DD100';
      a2.style.color = 'white';
      a2.classList.add('booked');
      bookedTickets++;
    }
    ticketCount();
  })

  a3.addEventListener('click', ()=>{
    if (a3.classList.contains('booked')) {
      a3.style.color = '';
      a3.style.background = '';
      a3.classList.remove('booked');
      bookedTickets--;
    } else {
      a3.style.background = '#1DD100';
      a3.style.color = 'white';
      a3.classList.add('booked');
      bookedTickets++;
    }
    ticketCount();
  })

  a4.addEventListener('click', ()=>{
    if (a4.classList.contains('booked')) {
      a4.style.color = '';
      a4.style.background = '';
      a4.classList.remove('booked');
      bookedTickets--;
    } else {
      a4.style.background = '#1DD100';
      a4.style.color = 'white';
      a4.classList.add('booked');
bookedTickets++;
    }
    ticketCount();
  })
}

function ticketSeletedB(){
    b1.addEventListener('click', ()=>{
        if (b1.classList.contains('booked')) {
            b1.style.color = '';
            b1.style.background = '';
            b1.classList.remove('booked');
            bookedTickets--;
        }else{
            b1.style.color = 'white';
            b1.style.background = '#1DD100';
            b1.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    b2.addEventListener('click', ()=>{
        if (b2.classList.contains('booked')) {
            b2.style.color = '';
            b2.style.background = '';
            b2.classList.remove('booked');
            bookedTickets--;
        }else{
            b2.style.color = 'white';
            b2.style.background = '#1DD100';
            b2.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    b3.addEventListener('click', ()=>{
        if (b3.classList.contains('booked')) {
            b3.style.color = '';
            b3.style.background = '';
            b3.classList.remove('booked');
            bookedTickets--;
        }else{
            b3.style.color = 'white';
            b3.style.background = '#1DD100';
            b3.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    b4.addEventListener('click', ()=>{
        if (b4.classList.contains('booked')) {
            b4.style.color = '';
            b4.style.background = '';
            b4.classList.remove('booked');
            bookedTickets--;
        }else{
            b4.style.color = 'white';
            b4.style.background = '#1DD100';
            b4.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
}

function ticketSeletedC(){
    c1.addEventListener('click', ()=>{
        if (c1.classList.contains('booked')) {
            c1.style.color = '';
            c1.style.background = '';
            c1.classList.remove('booked');
            bookedTickets--;
        }else{
            c1.style.color = 'white';
            c1.style.background = '#1DD100';
            c1.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    c2.addEventListener('click', ()=>{
        if (c2.classList.contains('booked')) {
            c2.style.color = '';
            c2.style.background = '';
            c2.classList.remove('booked');
            bookedTickets--;
        }else{
            c2.style.color = 'white';
            c2.style.background = '#1DD100';
            c2.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    c3.addEventListener('click', ()=>{
        if (c3.classList.contains('booked')) {
            c3.style.color = '';
            c3.style.background = '';
            c3.classList.remove('booked');
            bookedTickets--;
        }else{
            c3.style.color = 'white';
            c3.style.background = '#1DD100';
            c3.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    c4.addEventListener('click', ()=>{
        if (c4.classList.contains('booked')) {
            c4.style.color = '';
            c4.style.background = '';
            c4.classList.remove('booked');
            bookedTickets--;
        }else{
            c4.style.color = 'white';
            c4.style.background = '#1DD100';
            c4.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
}

function ticketSeletedD(){
    d1.addEventListener('click', ()=>{
        if (d1.classList.contains('booked')) {
            d1.style.color = '';
            d1.style.background = '';
            d1.classList.remove('booked');
            bookedTickets--;
        }else{
            d1.style.color = 'white';
            d1.style.background = '#1DD100';
            d1.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    d2.addEventListener('click', ()=>{
        if (d2.classList.contains('booked')) {
            d2.style.color = '';
            d2.style.background = '';
            d2.classList.remove('booked');
            bookedTickets--;
        }else{
            d2.style.color = 'white';
            d2.style.background = '#1DD100';
            d2.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    d3.addEventListener('click', ()=>{
        if (d3.classList.contains('booked')) {
            d3.style.color = '';
            d3.style.background = '';
            d3.classList.remove('booked');
            bookedTickets--;
        }else{
            d3.style.color = 'white';
            d3.style.background = '#1DD100';
            d3.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    d4.addEventListener('click', ()=>{
        if (d4.classList.contains('booked')) {
            d4.style.color = '';
            d4.style.background = '';
            d4.classList.remove('booked');
            bookedTickets--;
        }else{
            d4.style.color = 'white';
            d4.style.background = '#1DD100';
            d4.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
}

function ticketSeletedE(){
    e1.addEventListener('click', ()=>{
        if (e1.classList.contains('booked')) {
            e1.style.color = '';
            e1.style.background = '';
            e1.classList.remove('booked');
            bookedTickets--;
        }else{
            e1.style.color = 'white';
            e1.style.background = '#1DD100';
            e1.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    e2.addEventListener('click', ()=>{
        if (e2.classList.contains('booked')) {
            e2.style.color = '';
            e2.style.background = '';
            e2.classList.remove('booked');
            bookedTickets--;
        }else{
            e2.style.color = 'white';
            e2.style.background = '#1DD100';
            e2.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    e3.addEventListener('click', ()=>{
        if (e3.classList.contains('booked')) {
            e3.style.color = '';
            e3.style.background = '';
            e3.classList.remove('booked');
            bookedTickets--;
        }else{
            e3.style.color = 'white';
            e3.style.background = '#1DD100';
            e3.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    e4.addEventListener('click', ()=>{
        if (e4.classList.contains('booked')) {
            e4.style.color = '';
            e4.style.background = '';
            e4.classList.remove('booked');
            bookedTickets--;
        }else{
            e4.style.color = 'white';
            e4.style.background = '#1DD100';
            e4.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
}

function ticketSeletedF(){
    f1.addEventListener('click', ()=>{
        if (f1.classList.contains('booked')) {
            f1.style.color = '';
            f1.style.background = '';
            f1.classList.remove('booked');
            bookedTickets--;
        }else{
            f1.style.color = 'white';
            f1.style.background = '#1DD100';
            f1.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    f2.addEventListener('click', ()=>{
        if (f2.classList.contains('booked')) {
            f2.style.color = '';
            f2.style.background = '';
            f2.classList.remove('booked');
            bookedTickets--;
        }else{
            f2.style.color = 'white';
            f2.style.background = '#1DD100';
            f2.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    f3.addEventListener('click', ()=>{
        if (f3.classList.contains('booked')) {
            f3.style.color = '';
            f3.style.background = '';
            f3.classList.remove('booked');
            bookedTickets--;
        }else{
            f3.style.color = 'white';
            f3.style.background = '#1DD100';
            f3.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    f4.addEventListener('click', ()=>{
        if (f4.classList.contains('booked')) {
            f4.style.color = '';
            f4.style.background = '';
            f4.classList.remove('booked');
            bookedTickets--;
        }else{
            f4.style.color = 'white';
            f4.style.background = '#1DD100';
            f4.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
}

function ticketSeletedG(){
    g1.addEventListener('click', ()=>{
        if (g1.classList.contains('booked')) {
            g1.style.color = '';
            g1.style.background = '';
            g1.classList.remove('booked');
            bookedTickets--;
        }else{
            g1.style.color = 'white';
            g1.style.background = '#1DD100';
            g1.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    g2.addEventListener('click', ()=>{
        if (g2.classList.contains('booked')) {
            g2.style.color = '';
            g2.style.background = '';
            g2.classList.remove('booked');
            bookedTickets--;
        }else{
            g2.style.color = 'white';
            g2.style.background = '#1DD100';
            g2.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    g3.addEventListener('click', ()=>{
        if (g3.classList.contains('booked')) {
            g3.style.color = '';
            g3.style.background = '';
            g3.classList.remove('booked');
            bookedTickets--;
        }else{
            g3.style.color = 'white';
            g3.style.background = '#1DD100';
            g3.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    g4.addEventListener('click', ()=>{
        if (g4.classList.contains('booked')) {
            g4.style.color = '';
            g4.style.background = '';
            g4.classList.remove('booked');
            bookedTickets--;
        }else{
            g4.style.color = 'white';
            g4.style.background = '#1DD100';
            g4.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
}

function ticketSeletedH(){
    h1.addEventListener('click', ()=>{
        if (h1.classList.contains('booked')) {
            h1.style.color = '';
            h1.style.background = '';
            h1.classList.remove('booked');
            bookedTickets--;
        }else{
            h1.style.color = 'white';
            h1.style.background = '#1DD100';
            h1.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    h2.addEventListener('click', ()=>{
        if (h2.classList.contains('booked')) {
            h2.style.color = '';
            h2.style.background = '';
            h2.classList.remove('booked');
            bookedTickets--;
        }else{
            h2.style.color = 'white';
            h2.style.background = '#1DD100';
            h2.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    h3.addEventListener('click', ()=>{
        if (h3.classList.contains('booked')) {
            h3.style.color = '';
            h3.style.background = '';
            h3.classList.remove('booked');
            bookedTickets--;
        }else{
            h3.style.color = 'white';
            h3.style.background = '#1DD100';
            h3.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    h4.addEventListener('click', ()=>{
        if (h4.classList.contains('booked')) {
            h4.style.color = '';
            h4.style.background = '';
            h4.classList.remove('booked');
            bookedTickets--;
        }else{
            h4.style.color = 'white';
            h4.style.background = '#1DD100';
            h4.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
}

function ticketSeletedI(){
    i1.addEventListener('click', ()=>{
        if (i1.classList.contains('booked')) {
            i1.style.color = '';
            i1.style.background = '';
            i1.classList.remove('booked');
            bookedTickets--;
        }else{
            i1.style.color = 'white';
            i1.style.background = '#1DD100';
            i1.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    i2.addEventListener('click', ()=>{
        if (i2.classList.contains('booked')) {
            i2.style.color = '';
            i2.style.background = '';
            i2.classList.remove('booked');
            bookedTickets--;
        }else{
            i2.style.color = 'white';
            i2.style.background = '#1DD100';
            i2.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    i3.addEventListener('click', ()=>{
        if (i3.classList.contains('booked')) {
            i3.style.color = '';
            i3.style.background = '';
            i3.classList.remove('booked');
            bookedTickets--;
        }else{
            i3.style.color = 'white';
            i3.style.background = '#1DD100';
            i3.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    i4.addEventListener('click', ()=>{
        if (i4.classList.contains('booked')) {
            i4.style.color = '';
            i4.style.background = '';
            i4.classList.remove('booked');
            bookedTickets--;
        }else{
            i4.style.color = 'white';
            i4.style.background = '#1DD100';
            i4.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
}

function ticketSeletedJ(){
    j1.addEventListener('click', ()=>{
        if (j1.classList.contains('booked')) {
            j1.style.color = '';
            j1.style.background = '';
            j1.classList.remove('booked');
            bookedTickets--;
        }else{
            j1.style.color = 'white';
            j1.style.background = '#1DD100';
            j1.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    j2.addEventListener('click', ()=>{
        if (j2.classList.contains('booked')) {
            j2.style.color = '';
            j2.style.background = '';
            j2.classList.remove('booked');
            bookedTickets--;
        }else{
            j2.style.color = 'white';
            j2.style.background = '#1DD100';
            j2.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    j3.addEventListener('click', ()=>{
        if (j3.classList.contains('booked')) {
            j3.style.color = '';
            j3.style.background = '';
            j3.classList.remove('booked');
            bookedTickets--;
        }else{
            j3.style.color = 'white';
            j3.style.background = '#1DD100';
            j3.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
    
    j4.addEventListener('click', ()=>{
        if (j4.classList.contains('booked')) {
            j4.style.color = '';
            j4.style.background = '';
            j4.classList.remove('booked');
            bookedTickets--;
        }else{
            j4.style.color = 'white';
            j4.style.background = '#1DD100';
            j4.classList.add('booked');
            bookedTickets++;
        }
        ticketCount();
    })
}

function ticketCount(){
  console.log(`Total booked tickets: ${bookedTickets}`);
}

ticketSeletedA();
ticketSeletedB();
ticketSeletedC();
ticketSeletedD();
ticketSeletedE();
ticketSeletedF();
ticketSeletedG();
ticketSeletedH();
ticketSeletedI();
ticketSeletedJ();