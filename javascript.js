$(document).ready(function() {
    var win = false
    var player_turn = 1
    var column1_counter = 1
    var column2_counter = 1
    var column3_counter = 1
    var column4_counter = 1
    var column5_counter = 1
    var column6_counter = 1
    var column7_counter = 1
    var board = [
        ["X", "X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X", "X"]
    ]
    var isOdd = function(num) {
        if (num % 2 == 1) {
            return true
        } else {
            return false
        }
    }

    var vertical_checker = function(board, column, row) {
        if (board[row][column] == board[row - 1][column] &&
            board[row - 1][column] == board[row - 2][column] &&
            board[row - 2][column] == board[row - 3][column]) {
            win = true
            if (win == true && isOdd(player_turn) == false) {
                alert("Scumbag Sydney Wins!!!!!")
                location.reload();
            } else if (win == true && isOdd(player_turn) == true) {
                alert("Scumbag Pete Wins!!!!")
                location.reload();
            }
        }
    }

    var horizontal_checker = function(board, row_num) {
        var actual_row = board[row_num]
        var row_checker = actual_row.join('')
        if (row_checker.includes("BBBB") == true) {
            win = true
            alert("Scumbag Pete Wins!!!!")
            location.reload();
        } else if (row_checker.includes("BBBB") == true) {
            win = true
            alert("Scumbag Sydney Wins!!!!!")
            location.reload();
        }
    }

    var linear_checker = function(board, column, row) {
        linear_line = []
        for (var i = -4; i < 4; i++) {
            try {
                if (board[row + i][column + i] === "undefined") {} else {
                    linear_line.push(board[row + i][column + i])
                }
            } catch (e) {}
        }
        var line_checker = linear_line.join('')
        if (line_checker.includes("BBBB") == true) {
            win = true
            alert("Scumbag Pete Wins!!!!")
            location.reload();
        } else if (line_checker.includes("RRRR") == true) {
            win = true
            alert("Scumbag Sydney Wins!!!!!")
            location.reload();
        }
    }

    var inverse_checker = function(board, column, row) {
        inverse_line = []
        for (var i = -4; i < 4; i++) {
            try {
                if (board[row + (-i)][column + i] === "undefined") {} else {
                    inverse_line.push(board[row + (-i)][column + i])
                }
            } catch (e) {}
        }
        var inverse_checker = inverse_line.join('')
        if (inverse_checker.includes("BBBB") == true) {
            win = true
            alert("Scumbag Pete Wins!!!!")
            location.reload();
        } else if (inverse_checker.includes("RRRR") == true) {
            win = true
            alert("Scumbag Sydney Wins!!!!!")
            location.reload();
        }
    }

    $('#column1.cell').click(function(e) {
        e.preventDefault();
        player_turn += 1
        if (isOdd(player_turn) == true) {
            $('#row' + column1_counter + ' #column1').addClass('blue');
            column1_counter += 1
            board[(column1_counter - 2)][0] = "B"
            horizontal_checker(board, (column1_counter - 2))
            linear_checker(board, 0, (column1_counter - 2))
            inverse_checker(board, 0, (column1_counter - 2))
            vertical_checker(board, 0, (column1_counter - 2))
        } else if (isOdd(player_turn) == false) {
            $('#row' + column1_counter + ' #column1').addClass('red');
            column1_counter += 1
            board[(column1_counter - 2)][0] = "R"
            horizontal_checker(board, (column1_counter - 2))
            linear_checker(board, 0, (column1_counter - 2))
            inverse_checker(board, 0, (column1_counter - 2))
            vertical_checker(board, 0, (column1_counter - 2))
        }
    })

    $('#column2.cell').click(function(e) {
        e.preventDefault();
        player_turn += 1
        if (isOdd(player_turn) == true) {
            $('#row' + column2_counter + ' #column2').addClass('blue');
            column2_counter += 1
            board[(column2_counter - 2)][1] = "B"
            horizontal_checker(board, (column2_counter - 2))
            linear_checker(board, 1, (column2_counter - 2))
            inverse_checker(board, 1, (column2_counter - 2))
            vertical_checker(board, 1, (column2_counter - 2))
        } else if (isOdd(player_turn) == false) {
            $('#row' + column2_counter + ' #column2').addClass('red');
            column2_counter += 1
            board[(column2_counter - 2)][1] = "R"
            horizontal_checker(board, (column2_counter - 2))
            linear_checker(board, 1, (column2_counter - 2))
            inverse_checker(board, 1, (column2_counter - 2))
            vertical_checker(board, 1, (column2_counter - 2))
        }
    })

    $('#column3.cell').click(function(e) {
        e.preventDefault();
        player_turn += 1
        if (isOdd(player_turn) == true) {
            $('#row' + column3_counter + ' #column3').addClass('blue');
            column3_counter += 1
            board[(column3_counter - 2)][2] = "B"
            horizontal_checker(board, (column3_counter - 2))
            linear_checker(board, 2, (column3_counter - 2))
            inverse_checker(board, 2, (column3_counter - 2))
            vertical_checker(board, 2, (column3_counter - 2))
        } else if (isOdd(player_turn) == false) {
            $('#row' + column3_counter + ' #column3').addClass('red');
            column3_counter += 1
            board[(column3_counter - 2)][2] = "R"
            horizontal_checker(board, (column3_counter - 2))
            linear_checker(board, 2, (column3_counter - 2))
            inverse_checker(board, 2, (column3_counter - 2))
            vertical_checker(board, 2, (column3_counter - 2))
        }
    })

    $('#column4.cell').click(function(e) {
        e.preventDefault();
        player_turn += 1
        if (isOdd(player_turn) == true) {
            $('#row' + column4_counter + ' #column4').addClass('blue');
            column4_counter += 1
            board[(column4_counter - 2)][3] = "B"
            horizontal_checker(board, (column4_counter - 2))
            linear_checker(board, 3, (column4_counter - 2))
            inverse_checker(board, 3, (column4_counter - 2))
            vertical_checker(board, 3, (column4_counter - 2))
        } else if (isOdd(player_turn) == false) {
            $('#row' + column4_counter + ' #column4').addClass('red');
            column4_counter += 1
            board[(column4_counter - 2)][3] = "R"
            horizontal_checker(board, (column4_counter - 2))
            linear_checker(board, 3, (column4_counter - 2))
            inverse_checker(board, 3, (column4_counter - 2))
            vertical_checker(board, 3, (column4_counter - 2))
        }
    })

    $('#column5.cell').click(function(e) {
        e.preventDefault();
        player_turn += 1
        if (isOdd(player_turn) == true) {
            $('#row' + column5_counter + ' #column5').addClass('blue');
            column5_counter += 1
            board[(column5_counter - 2)][4] = "B"
            horizontal_checker(board, (column5_counter - 2))
            linear_checker(board, 4, (column5_counter - 2))
            inverse_checker(board, 4, (column5_counter - 2))
            vertical_checker(board, 4, (column5_counter - 2))
        } else if (isOdd(player_turn) == false) {
            $('#row' + column5_counter + ' #column5').addClass('red');
            column5_counter += 1
            board[(column5_counter - 2)][4] = "R"
            horizontal_checker(board, (column5_counter - 2))
            linear_checker(board, 4, (column5_counter - 2))
            inverse_checker(board, 4, (column5_counter - 2))
            vertical_checker(board, 4, (column5_counter - 2))
        }
    })

    $('#column6.cell').click(function(e) {
        e.preventDefault();
        player_turn += 1
        if (isOdd(player_turn) == true) {
            $('#row' + column6_counter + ' #column6').addClass('blue');
            column6_counter += 1
            board[(column6_counter - 2)][5] = "B"
            horizontal_checker(board, (column6_counter - 2))
            linear_checker(board, 5, (column6_counter - 2))
            inverse_checker(board, 5, (column6_counter - 2))
            vertical_checker(board, 5, (column6_counter - 2))
        } else if (isOdd(player_turn) == false) {
            $('#row' + column6_counter + ' #column6').addClass('red');
            column6_counter += 1
            board[(column6_counter - 2)][5] = "R"
            horizontal_checker(board, (column6_counter - 2))
            linear_checker(board, 5, (column6_counter - 2))
            inverse_checker(board, 5, (column6_counter - 2))
            vertical_checker(board, 5, (column6_counter - 2))
        }
    })

    $('#column7.cell').click(function(e) {
        e.preventDefault();
        player_turn += 1
        if (isOdd(player_turn) == true) {
            $('#row' + column7_counter + ' #column7').addClass('blue');
            column7_counter += 1
            board[(column7_counter - 2)][6] = "B"
            vertical_checker(board, 6, (column7_counter - 2))
            linear_checker(board, 6, (column7_counter - 2))
            inverse_checker(board, 6, (column7_counter - 2))
            horizontal_checker(board, (column7_counter - 2))
        } else if (isOdd(player_turn) == false) {
            $('#row' + column7_counter + ' #column7').addClass('red');
            column7_counter += 1
            board[(column7_counter - 2)][6] = "R"
            horizontal_checker(board, (column7_counter - 2))
            linear_checker(board, 6, (column7_counter - 2))
            inverse_checker(board, 6, (column7_counter - 2))
            vertical_checker(board, 6, (column7_counter - 2))
        }
    })
});
