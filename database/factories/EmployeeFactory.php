<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'firstname' => $this->faker->firstName,
            'lastname' => $this->faker->lastName,
            'code' => $this->faker->unique()->randomNumber(3, true),
            'active' => 1,
            'department_id' => \App\Models\Department::inRandomOrder()->first()->id ?? 1, 
        ];
    }
}
