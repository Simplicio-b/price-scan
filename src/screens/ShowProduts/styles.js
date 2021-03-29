import styled from 'styled-components/native'

export const Header = styled.View `
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Body = styled.View `
    flex: 9;
    padding: 20px;
`

export const Content = styled.View `
    elevation: 6;
    flex: 1; 
    background-color: #FFF;
    border-radius: 4px;
    padding: 10px 15px;
`

export const ContentHeader = styled.View `
    flex: 5; 
    border-bottom-width: 1px; 
    border-bottom-color: #999999;
    align-items: center;
    justify-content: space-around;
`

export const TextLbl = styled.Text `
    font-weight: bold; 
    font-size: 15px;
`

export const ContentTickets = styled.View `
    flex: 1; 
    justify-content: space-around;
`

export const Ticket = styled.View `
    height: 30px;
    background-color: ${e => e.bg || '#909090'}; 
    border-radius: 4px; 
    elevation: 5; 
    justify-content: center;
    padding-left: 10px;
`

export const TicketText = styled.Text `
    color: #FFF;
    font-weight: bold;
`

export const Footer = styled.View `
    flex: 2;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
`
