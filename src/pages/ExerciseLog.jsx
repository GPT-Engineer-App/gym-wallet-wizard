import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExerciseLog = () => {
  const [exercises, setExercises] = useState([]);
  const [currentExercise, setCurrentExercise] = useState({
    name: '',
    sets: '',
    reps: '',
    weight: ''
  });

  const handleInputChange = (e) => {
    setCurrentExercise({
      ...currentExercise,
      [e.target.name]: e.target.value
    });
  };

  const handleAddExercise = () => {
    setExercises([...exercises, currentExercise]);
    setCurrentExercise({ name: '', sets: '', reps: '', weight: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Exercise Log</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add Exercise</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Select onValueChange={(value) => setCurrentExercise({...currentExercise, name: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select exercise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="squat">Squat</SelectItem>
                <SelectItem value="bench-press">Bench Press</SelectItem>
                <SelectItem value="deadlift">Deadlift</SelectItem>
                <SelectItem value="overhead-press">Overhead Press</SelectItem>
              </SelectContent>
            </Select>
            <Input
              name="sets"
              type="number"
              placeholder="Sets"
              value={currentExercise.sets}
              onChange={handleInputChange}
            />
            <Input
              name="reps"
              type="number"
              placeholder="Reps"
              value={currentExercise.reps}
              onChange={handleInputChange}
            />
            <Input
              name="weight"
              type="number"
              placeholder="Weight (kg)"
              value={currentExercise.weight}
              onChange={handleInputChange}
            />
          </div>
          <Button className="mt-4 w-full" onClick={handleAddExercise}>Add Exercise</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Today's Workout</CardTitle>
        </CardHeader>
        <CardContent>
          {exercises.length === 0 ? (
            <p>No exercises logged yet.</p>
          ) : (
            <ul className="space-y-2">
              {exercises.map((exercise, index) => (
                <li key={index} className="bg-white p-4 rounded-md shadow">
                  <strong>{exercise.name}</strong>: {exercise.sets} sets x {exercise.reps} reps @ {exercise.weight}kg
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ExerciseLog;
