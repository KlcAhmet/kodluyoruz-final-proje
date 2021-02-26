import { Overview } from "../componentmap"

export const selection = () => {
    const switchbtn = document.getElementById("s3")
    const background = document.getElementById("root")
    const ustdiv = document.getElementById("ustdiv")
    const paragraph = document.getElementsByTagName("p")

    if (switchbtn.checked) {
        /* sayfa arkaplan */
        background.classList.add("dark-body")
        /* üstdiv */
        ustdiv.classList.remove("renklidiv--renkli")
        ustdiv.classList.add("dark-div")
        /* paragraph */
        for (let element of paragraph) {
            element.classList.add("dark-paragraph")
        }
        overview(1)
        istatistics(1)

    } else {
        /* sayfa arkaplan */
        background.classList.remove("dark-body")
        /* üstdiv */
        ustdiv.classList.remove("dark-div")
        ustdiv.classList.add("renklidiv--renkli")
        /* paragraph */
        for (let element of paragraph) {
            element.classList.remove("dark-paragraph")
        }
        overview(0)
        istatistics(0)
    }

}

function istatistics(deger) {
    const statsTable = document.getElementById("stats-table")
    if (statsTable == null) {
        return
    }
    if (deger == 1) {
        statsTable.classList.remove("stats-table--background")
        statsTable.classList.add("dark-stats-table")
    } else {
        statsTable.classList.remove("dark-stats-table")
        statsTable.classList.add("stats-table--background")
    }

}

function overview(deger) {
    const commonButton = document.getElementsByClassName("common-button")
    if (commonButton == null) {
        return
    }
    if (deger == 1) {
        for (let element of commonButton) {
            element.classList.remove("common-button--dayBackGround")
            element.classList.add("dark-common-button")
        }
    } else {
        for (let element of commonButton) {
            element.classList.remove("dark-common-button")
            element.classList.add("common-button--dayBackGround")
        }
    }
}