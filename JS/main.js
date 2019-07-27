(function() {
    init()
    console.log("Main Init called")
})();

function InitFilesRankBrd() {
    var index = 0;
    var file = FILES.FILE_A;
    var rank = RANKs.RANK_1;
    var sq = SQUARES.A1;
    
    // Clearing 120 squares to inside-board and off-board
    for (index = 0; index < BRD_SQ_NUM; ++index) {
        FilesBrd[index] = SQUARES.OFFBOARD;
        RanksBrd[index] = SQUARES.OFFBOARD;
    }

    // For each square, sets the appropriate file & rank
    for (rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
        for (file = FILES.FILA_A; file <= FILES.FILE_H; ++file) {
            sq = FR25Q(file, rank);
            FilesBrd[sq] = file;
            RanksBrd[sq] = rank;
        }
    }
    console.log(`FilesBrd[sq]: ${FilesBrd[0]} , RanksBrd[0]: ${RanksBrd[0]}`);
    console.log(`FilesBrd[SQUARES.A1]: ${FilesBrd[SQUARES.A1]} , RanksBrd[SQUARES.A1]: ${RanksBrd[SQUARES.A1]}`);
    console.log(`FilesBrd[SQUARES.E8]: ${FilesBrd[SQUARES.E8]} , RanksBrd[0]: ${RanksBrd[SQUARES.E8]}`);
}

function init() {
    console.log("init called");
    InitFilesRankBrd();
}