let Letter = function (character) {
    this.character = character;
    this.guessed = false;

    this.display = function () {
        if (this.character == ' ') {
            return (' ');
        }

        else if (this.guessed) {
            return (this.character)
        }

        else if (this.character == "'") {
            return ("'")
        }

        else if (this.character == "-") {
            return ('-')
        }

        else if (this.character
        }
    }
}

