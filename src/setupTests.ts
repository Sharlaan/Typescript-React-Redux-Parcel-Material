// import 'react-testing-library/cleanup-after-each'
import { cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import 'jest-extended'
// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)
