import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App, { cars } from './App'

describe('Car Inventory App', () => {
  describe('Car Data Structure', () => {
    it('should have 3 cars in the inventory', () => {
      expect(cars).toHaveLength(3)
    })

    it('should contain G Class in cars array', () => {
      const gClass = cars.find((car) => car.model === 'G Class')
      expect(gClass).toBeDefined()
      expect(gClass?.maker).toBe('Mercedes-Benz')
    })

    it('should contain Miata in cars array', () => {
      const miata = cars.find((car) => car.model === 'Miata')
      expect(miata).toBeDefined()
      expect(miata?.maker).toBe('Mazda')
      expect(miata?.color).toBe('Red')
    })

    it('should contain M5 in cars array', () => {
      const m5 = cars.find((car) => car.model === 'M5')
      expect(m5).toBeDefined()
      expect(m5?.maker).toBe('BMW')
      expect(m5?.year).toBe(2023)
    })

    it('all cars should have valid VIN format', () => {
      cars.forEach((car) => {
        expect(car.vin).toBeDefined()
        expect(car.vin.length).toBeGreaterThan(0)
        expect(typeof car.vin).toBe('string')
      })
    })

    it('all cars should have year 2023', () => {
      cars.forEach((car) => {
        expect(car.year).toBe(2023)
      })
    })
  })

  describe('App Component Rendering', () => {
    it('should render car inventory heading', () => {
      render(<App />)
      expect(screen.getByText('Car Inventory')).toBeDefined()
    })

    it('should render table headers', () => {
      render(<App />)
      expect(screen.getByText('Maker')).toBeDefined()
      expect(screen.getByText('Model')).toBeDefined()
      expect(screen.getByText('Year')).toBeDefined()
      expect(screen.getByText('VIN')).toBeDefined()
      expect(screen.getByText('Color')).toBeDefined()
    })

    it('should render all car rows', () => {
      render(<App />)
      expect(screen.getByTestId('car-row-0')).toBeDefined()
      expect(screen.getByTestId('car-row-1')).toBeDefined()
      expect(screen.getByTestId('car-row-2')).toBeDefined()
    })

    it('should display G Class in the table', () => {
      render(<App />)
      expect(screen.getByText('G Class')).toBeDefined()
      expect(screen.getByText('Mercedes-Benz')).toBeDefined()
    })

    it('should display Miata in the table', () => {
      render(<App />)
      expect(screen.getByText('Miata')).toBeDefined()
      expect(screen.getByText('Red')).toBeDefined()
    })

    it('should display M5 in the table', () => {
      render(<App />)
      expect(screen.getByText('M5')).toBeDefined()
      expect(screen.getByText('BMW')).toBeDefined()
    })

    it('should display all car colors', () => {
      render(<App />)
      expect(screen.getByText('Red')).toBeDefined()
      expect(screen.getByText('Black')).toBeDefined()
      expect(screen.getByText('Blue')).toBeDefined()
    })
  })
})
