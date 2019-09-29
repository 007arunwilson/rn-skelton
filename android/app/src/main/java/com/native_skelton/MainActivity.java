package com.native_skelton;

import android.os.Bundle;

import androidx.annotation.Nullable;

import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        setTheme(R.style.AppTheme);
        super.onCreate(savedInstanceState);
    }
}
