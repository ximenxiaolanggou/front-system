interface User {
    admin: boolean
}

interface DB {
    filterUsers(filter:(this:User) => boolean):User[]
}

const db:DB = {
    filterUsers:(filter:(this:User) => boolean):User[] => {
        let user1:User = {
            admin:true
        }

        let user2:User = {
            admin:true
        }

        return [user1, user2]

    }
}

db.filterUsers(function(this:User){
    return this.admin
})

db.filterUsers((this:User):boolean => {
    return this.admin
})

