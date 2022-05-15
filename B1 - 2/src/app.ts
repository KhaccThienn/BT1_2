var _html = '';
var products:{name: string, image: string}[] = [
    {
        name: 'Visual Studio Code',
        image: '../data/vscode.jpg'
    },
    {
        name: 'Visual Studio Code',
        image: '../data/vscode.jpg'
    },
    {
        name: 'Visual Studio Code',
        image: '../data/vscode.jpg'
    },
    {
        name: 'Visual Studio Code',
        image: '../data/vscode.jpg'
    },
    {
        name: 'Visual Studio Code',
        image: '../data/vscode.jpg'
    },
    {
        name: 'Visual Studio Code',
        image: '../data/vscode.jpg'
    },
    {
        name: 'Visual Studio Code',
        image: '../data/vscode.jpg'
    },
    {
        name: 'Visual Studio Code',
        image: '../data/vscode.jpg'
    },
];
var modal:{mName: string, image: string}[]  = [
    {
        mName: 'Hwoang Amnh Tmu',
        image: '../data/tungu.jpg'
    }
]

function loopsFunc(): void {
    for (let key in products) {
        _html += `<div class="card" style="width: 18rem;">
            <img src="${products[key].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${products[key].name}</h5>
                <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Chi Tiet</button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="card container" style="width: 18rem;">
                                <img src="${modal[0].image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${modal[0].mName}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>`;
    }
}
loopsFunc();
function newFunction(): void {
    var roots = document.getElementById('root');
    roots.innerHTML = _html;
}
newFunction();