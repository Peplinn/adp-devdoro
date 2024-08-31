import React, { useState } from 'react';

const CustomPomodoroCard = () => {
    const [quickSetHours, setQuickSetHours] = useState(2);
    const [quickSetMinutes, setQuickSetMinutes] = useState(13);
    const [psRatio, setPsRatio] = useState(0.07);
    const [longBreakMultiplier, setLongBreakMultiplier] = useState(3);
    const [longBreakInterval, setLongBreakInterval] = useState(2);
    const [pomodoro, setPomodoro] = useState(56);
    const [shortBreak, setShortBreak] = useState(9);
    const [longBreak, setLongBreak] = useState(27);


    const handleSave = () => {
        const totalMinutes = (parseInt(quickSetHours) * 60) + parseInt(quickSetMinutes);
        const pomodoroMinutes = totalMinutes * psRatio;
        const shortBreakMinutes = pomodoroMinutes * longBreakMultiplier;
        const longBreakMinutes = shortBreakMinutes * longBreakInterval;
    
        setPomodoro(Math.round(pomodoroMinutes));
        setShortBreak(Math.round(shortBreakMinutes));
        setLongBreak(Math.round(longBreakMinutes));
    };
    


    return (
        <div className="custom-pomodoro-card">
            <h3>Custom Pomodoro</h3>
            <div>
                <label>Quick Set</label>
                <input 
                    type="number" 
                    value={quickSetHours} 
                    onChange={(e) => setQuickSetHours(e.target.value)} 
                /> hours
                <input 
                    type="number" 
                    value={quickSetMinutes} 
                    onChange={(e) => setQuickSetMinutes(e.target.value)} 
                /> mins
            </div>
    
            <div>
                <label>P:S Ratio</label>
                <input 
                    type="number" 
                    value={psRatio} 
                    onChange={(e) => setPsRatio(e.target.value)} 
                />
            </div>
    
            <div>
                <label>Long Break Multiplier</label>
                <input 
                    type="number" 
                    value={longBreakMultiplier} 
                    onChange={(e) => setLongBreakMultiplier(e.target.value)} 
                />
            </div>
    
            <div>
                <label>Long Break Interval</label>
                <input 
                    type="number" 
                    value={longBreakInterval} 
                    onChange={(e) => setLongBreakInterval(e.target.value)} 
                />
            </div>
    
            <div>
                <label>Pomodoro</label>
                <input 
                    type="number" 
                    value={pomodoro} 
                    onChange={(e) => setPomodoro(e.target.value)} 
                /> mins
            </div>
    
            <div>
                <label>Short Break</label>
                <input 
                    type="number" 
                    value={shortBreak} 
                    onChange={(e) => setShortBreak(e.target.value)} 
                /> mins
            </div>
    
            <div>
                <label>Long Break</label>
                <input 
                    type="number" 
                    value={longBreak} 
                    onChange={(e) => setLongBreak(e.target.value)} 
                /> mins
            </div>
    
            <button onClick={handleSave}>Save</button>
        </div>
    );
    
};

export default CustomPomodoroCard;
