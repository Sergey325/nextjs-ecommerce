import {User} from "@prisma/client";

export const getUserMenuHrPositions = (currentUser: User | null | undefined, windowWidth: number, optionsLength: number) => {
    if (!currentUser) { // for not logged-in users
        if (windowWidth < 768) return [3]
        return []
    } else if (currentUser && currentUser.role !== "customer") { // for logged-in administrators
        let positions = [3, optionsLength - 1]
        if (windowWidth < 768) {
            positions.push(6)
        }
        return positions;
    } else { // for logged-in customers
        let positions = [optionsLength - 1]
        if (windowWidth < 768) {
            positions.push(3)
        }
        return positions
    }
}
