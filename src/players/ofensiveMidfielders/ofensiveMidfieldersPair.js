import ofensiveMidfielders from "./ofensiveMidfielders.js";
import { } from '../../utils/arrayUtils.js'

const firstOfensiveMidfielderIndex = ofensiveMidfielders.randomIndex()
const firstOfensiveMidfielder = ofensiveMidfielders[firstOfensiveMidfielderIndex]

const ofensiveMidfieldersWithoutFirstMidfielder = ofensiveMidfielders.filter(midfielder => midfielder !== firstOfensiveMidfielder )

const secondOfensiveMidfielderIndex  = ofensiveMidfieldersWithoutFirstMidfielder.randomIndex()
const secondOfensiveMidfielder = ofensiveMidfieldersWithoutFirstMidfielder[secondOfensiveMidfielderIndex]


export {firstOfensiveMidfielder, secondOfensiveMidfielder}