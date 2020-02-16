
export default function WindDirections(wind) {
    if (wind == 360) {
        return 'Norden'
    }
    if (wind == 90) {
        return 'Osten'
    }
    if (wind == 180) {
        return 'Süden'
    }
    if (wind == 270) {
        return 'Westen'
    }
    if (wind == 45) {
        return 'Nord-Ost'
    }
    if (wind == 135) {
        return 'Süd-Ost'
    }
    if (wind == 225) {
        return 'Süd-West'
    }
    if (wind == 315) {
        return 'Nord-West'
    }
    if (wind > 0 && wind < 45) {
        return 'Nord-Nord-Ost'
    }
    if (wind > 45 && wind < 90) {
        return 'Ost-Nord-Ost'
    }
    if (wind > 90 && wind < 135) {
        return 'Ost-Süd-Ost'
    }
    if (wind > 135 && wind < 180) {
        return 'Süd-Süd-Ost'
    }
    if (wind > 180 && wind < 225) {
        return 'Süd-Süd-West'
    }
    if (wind > 225 && wind < 270) {
        return 'West-Süd-West'
    }
    if (wind > 270 && wind < 315) {
        return 'West-Nord-West'
    }
    if (wind > 315 && wind < 360) {
        return 'Nord-Nord-West'
    }
    return 'Windstil'
}