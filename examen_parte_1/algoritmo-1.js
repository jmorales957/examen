let cases = [
    'rojo',
    'verde',
    'naranja'
]

let casesWhitHours = [
   {
       case: 'rojo',
       hour: 3
   },
   {
       case: 'rojo',
       hour: 2
   },
   {
       case: 'verde',
       hour: 2
   },
   {
        case: 'verde',
        hour: 2
    },
    {
        case: 'naranja',
        hour: 5
    },
    {
        case: 'naranja',
        hour: 4
    }
]


function urgencyColor(cases) {
    let red = []
    let verde = []
    let naranja = []
    let order = []

    cases.forEach(element => {
        if(element == 'rojo') red.push(element)
        else if(element == 'naranja') naranja.push(element)
        else if(element == 'verde') verde.push(element)

    });
    order = [
        ...red,
        ...naranja,
        ...verde
    ]
    return order
}

function urgencyColorHour(casesWhitHours) {
    let rojo = []
    let verde = []
    let naranja = []
    let order = []
    let order2 = []

    casesWhitHours.forEach(element => {
        if(element.case == 'rojo') {
            rojo.push(element)
           
        }
         else if(element.case == 'naranja') naranja.push(element)
         else if(element.case == 'verde') verde.push(element)

    });
    rojo.sort(function(a, b){
        return a.hour-b.hour
    })
    naranja.sort(function(a, b){
        return a.hour-b.hour
    })
    verde.sort(function(a, b){
        return a.hour-b.hour
    })

    order = [
        ...rojo,
        ...naranja,
        ...verde
    ]

    order.forEach(element => {
        
    });
   
    return order
}


console.log(urgencyColorHour(casesWhitHours))
console.log(urgencyColor(cases))