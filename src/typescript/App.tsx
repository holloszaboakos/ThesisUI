import React, { Component } from 'react';
import { ModelView } from './ui/old/dmla/modelView';
import { Model } from './data/dmla/Model';
import '../css/index.css';

export function App() {
  const states: string[] = ["secreated", "prepared", "started", "resumed"]
  const [value, setValue] = React.useState(0)

  return (
    <div className="app">
    </div>
  );
}