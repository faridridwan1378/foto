import streamlit as st
import yfinance as yf
import pandas as pd
import plotly.graph_objects as go
import ta

st.title("Saham Analyzer Dashboard")

ticker = st.text_input("Enter Stock Ticker (e.g., AAPL)", "AAPL")
period = st.selectbox("Select Period", ["1mo", "3mo", "6mo", "1y", "2y", "5y"], index=3)

if st.button("Analyze"):
    with st.spinner("Fetching data..."):
        data = yf.download(ticker, period=period)
        if data.empty:
            st.error("No data found for the ticker.")
            st.stop()

    # Calculate technical indicators
    close = data['Close'].squeeze()
    data['SMA_20'] = ta.trend.SMAIndicator(close, window=20).sma_indicator()
    data['SMA_50'] = ta.trend.SMAIndicator(close, window=50).sma_indicator()
    data['RSI'] = ta.momentum.RSIIndicator(close).rsi()
    macd = ta.trend.MACD(close)
    data['MACD'] = macd.macd()
    data['MACD_Signal'] = macd.macd_signal()

    # Display data
    st.subheader(f"Stock Data for {ticker.upper()}")
    st.dataframe(data.tail())

    # Plot Price Chart
    fig_price = go.Figure()
    fig_price.add_trace(go.Scatter(x=data.index, y=data['Close'], mode='lines', name='Close Price'))
    fig_price.add_trace(go.Scatter(x=data.index, y=data['SMA_20'], mode='lines', name='SMA 20'))
    fig_price.add_trace(go.Scatter(x=data.index, y=data['SMA_50'], mode='lines', name='SMA 50'))
    fig_price.update_layout(title="Price Chart with Moving Averages", xaxis_title="Date", yaxis_title="Price")
    st.plotly_chart(fig_price)

    # Plot RSI
    fig_rsi = go.Figure()
    fig_rsi.add_trace(go.Scatter(x=data.index, y=data['RSI'], mode='lines', name='RSI'))
    fig_rsi.add_hline(y=70, line_dash="dash", line_color="red", annotation_text="Overbought")
    fig_rsi.add_hline(y=30, line_dash="dash", line_color="green", annotation_text="Oversold")
    fig_rsi.update_layout(title="RSI Indicator", xaxis_title="Date", yaxis_title="RSI")
    st.plotly_chart(fig_rsi)

    # Plot MACD
    fig_macd = go.Figure()
    fig_macd.add_trace(go.Scatter(x=data.index, y=data['MACD'], mode='lines', name='MACD'))
    fig_macd.add_trace(go.Scatter(x=data.index, y=data['MACD_Signal'], mode='lines', name='Signal'))
    fig_macd.update_layout(title="MACD Indicator", xaxis_title="Date", yaxis_title="MACD")
    st.plotly_chart(fig_macd)
