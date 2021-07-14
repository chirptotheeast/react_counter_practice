$global_var = 45


@cat_id = 3
@cat_name = 'Maude'


class Cat
    def initialize(id, name, species)
        @cat_id = id
        @cat_name = name
        @cat_species = species
    end
end

class Dog
    @@no_of_doggos = 0
    def initialize(id, name, breed)
        @dog_id = id
        @dog_name = name
        @dog_breed = breed
    end
end


def method
    x = 12
    p x
end